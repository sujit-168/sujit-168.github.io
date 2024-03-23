---
title: 基于 ROS1 多机框架的修改
date: 2024-03-11 22:49
categories: [ROS]
tags: [ROS1,  tf_prefix,  RobotNameSpace,  group]
copyright: true
---

# 基于 ROS1 多机框架的修改

## 与 urdf 模型相关的 tf_prefix

`tf_prefix`从名称意义上表明了该参数是用来修改 `tf` 坐标系名称前缀的。而 `urdf` 模型通过 `robot_state_publisher` 节点发布 `/tf` 广播，所以 `tf_prefix` 参数的修改会直接影响 `tf` 坐标系名称，即它的命名空间。

- [ROS Noetic tf_prefix no longer supported #147](https://github.com/ros/robot_state_publisher/issues/147)

**atlas_run.xacro**
```xml
<?xml version="1.0"?>
<robot name="atlas" xmlns:xacro="http://www.ros.org/wiki/xacro">
    <xacro:property name="prefix" value="$(arg prefix)" />

    <xacro:if value="${prefix == '/' or prefix == '' or prefix == ' '}">
    <xacro:property name="tf_prefix" value="" />
    </xacro:if>

    <xacro:unless value="${prefix == '/' or prefix == '' or prefix == ' '}">
    <xacro:property name="tf_prefix" value="${prefix}/" />
    </xacro:unless>

    <xacro:include filename="$(find atlas_gazebo)/urdf/atlas.xacro" />

</robot>
```
**atlas.xacro**
```xml
<?xml version="1.0" encoding="utf-8"?>

<robot xmlns:xacro="http://www.ros.org/wiki/xacro">

  <xacro:include filename="$(find atlas_gazebo)/urdf/macros.xacro" />

  <link name="${tf_prefix}base_footprint">
  </link>

  <link name="${tf_prefix}base_link">
    <visual>
      <geometry>
        <!-- <box size="0.28 0.1 0.03"/> -->
        <mesh filename="package://atlas_description/meshes/base_link.STL" />
      </geometry>
      <origin xyz="-0.13 0 0" rpy="0 0 0" />

      <material name="gray">
        <color rgba="0.5 0.5 0.5 1.0" />
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.28 0.1 0.03" />
      </geometry>
      <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0" />
    </collision>

  </link>

  <joint name="base_link2base_footprint" type="fixed">
    <parent link="${tf_prefix}base_footprint" />
    <child link="${tf_prefix}base_link" />
    <origin xyz="0 0 0.032" rpy="0 0 0" />
  </joint>
  .........

  <xacro:include filename="$(find atlas_gazebo)/urdf/atlas.gazebo" />
</robot>
```

在`.gazebo`文件中的`<gazebo reference="${tf_prefix}base_link">`和`.so`插件中的命名空间参数（如`<robotNamespace>、 <topicName>、<frameName>`），应当与`tf_prefix`需要一致。

**atlas.gazebo**
```xml
<?xml version="1.0"?>
<robot name="atlas" xmlns:xacro="http://www.ros.org/wiki/xacro">

  <!-- Gazebo references -->

  <gazebo reference="${tf_prefix}base_link">
    <mu1 value="0.0" />
    <mu2 value="0.0" />
    <kp value="10000000.0" />
    <kd value="1.0" />
    <material>Gazebo/DarkGray</material>
  </gazebo>

  .......

  <!-- Gazebo Plugins -->
  <gazebo>
    <plugin name="gazebo_ros_control" filename="libgazebo_ros_control.so">
      <robotNamespace>/${tf_prefix}</robotNamespace>
      <robotParam>robot_description</robotParam>
      <robotSimType>gazebo_ros_control/DefaultRobotHWSim</robotSimType>
      <legacyModeNS>true</legacyModeNS>
    </plugin>
  </gazebo>

  <!-- hokuyo -->

  <gazebo reference="${tf_prefix}laser">
    <sensor type="ray" name="hokuyo_sensor">
      <pose>0 0 0.0124 0 0 0</pose>
      <visualize>false</visualize>
      <update_rate>40</update_rate>
      <ray>
        <scan>
          <horizontal>
            <samples>1081</samples>
            <resolution>1</resolution>
            <min_angle>-2.3561944902</min_angle>
            <max_angle>2.3561944902</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.1</min>
          <max>10.0</max>
          <resolution>0.01</resolution>
        </range>
        <noise>
          <mean>0.0</mean>
          <stddev>0.01</stddev>
        </noise>
      </ray>
      <plugin name="gazebo_ros_hokuyo_controller" filename="libgazebo_ros_laser.so">
        <topicName>/${tf_prefix}scan</topicName>
        <frameName>/${tf_prefix}base_footprint</frameName>
      </plugin>
    </sensor>
  </gazebo>

</robot>
```

## roslaunch 中的 arg 标签
- [roslaunch - group tag with empty ns (namespace) fails. #360](https://github.com/ros/ros_comm/issues/360)

在最上层的 `launch` 文件中，使用 `arg` 标签来设置可变参数。这些参数可以在后续的 `launch` 文件中使用，被调用的子文件中可以不设定初始值。

**parent.launch**
```xml
<?xml version="1.0"?>
<launch>
    <!-- set param of launch file -->
    ..........
    <arg name="world" default="tianracer_racetrack" />
    <arg name="robot_name" default="$(optenv ATLAS_NAME /)" doc="robot name [atlas_No1, atlas_No2, atlas_No3, ...]"/>
    <arg name="default_ns" default="atlas"/>
    ..........
</launch>
```

**child.launch**
```xml
<?xml version="1.0"?>
<launch>
    <!-- set param of launch file -->
    ..........
    <arg name="world" />
    <arg name="robot_name" />
    ..........
</launch>
```

## map_server 修改地图发布坐标
- [ros 修改 map_server 地图发布的 map 关联的坐标系 frame_id(多机器人联合建图用)](https://blog.csdn.net/qq_23670601/article/details/93601695)

根据 `map_server` 修改地图发布坐标，修改为 `map` 即可，通过添加 `<param name="frame_id" value="map" />` 实现。
如果要给 `/map` 话题添加命名空间，则可以通过`ns="$(arg namespace)"`实现。
```xml
<group if="$(eval arg('robot_name') == '/')">
    <node name="map_server" pkg="map_server" type="map_server" ns="$(arg namespace)" args="$(find atlas_gazebo)/maps/$(arg world).yaml" >
        <param name="frame_id" value="map" />
    </node>
</group>
```

## 基于 group 的条件判断
基于 `eval` 表达式将 `<group if="$(eval arg('robot_name') == '/')">` 改为 `<group unless="$(eval arg('robot_name') == '/')">` 即可实现类似 `python` 代码中的 `if else` 的判断语句效果。

- [using-conditionals-in-roslaunch.md](https://campus-rover.gitbook.io/lab-notebook/campusrover-lab-notebook/faq/using-conditionals-in-roslaunch)
- [roslaunch - group tag with empty ns (namespace) fails. #360](https://github.com/ros/ros_comm/issues/360)

```xml
<launch>
    <!-- Config map file -->
    <arg name="world" default="atlas_racetrack" />
    <arg name="robot_name" default="$(optenv ATLAS_NAME /)" doc="robot name [atlas_No1, atlas_No2, atlas_No3, ...]"/>
    <arg name="namespace" default="atlas"/>

    <group if="$(eval arg('robot_name') == '/')">

        <!-- Map server, load map-->
        <node name="map_server" pkg="map_server" type="map_server" ns="$(arg namespace)" args="$(find atlas_gazebo)/maps/$(arg world).yaml" >
            <param name="frame_id" value="map" />
        </node>

        <!-- launch gazebo simulation environment -->
        <include file="$(find atlas_gazebo)/launch/atlas_on_racetrack.launch" >
            <arg name="world" value="$(arg world)" />
            <arg name="robot_name" value="$(arg namespace)" />
        </include>

        <!-- launch atlas control -->
        <include file="$(find atlas_gazebo)/launch/atlas_control.launch" >
            <arg name="robot_name" value="$(arg namespace)" />
        </include>

        <!-- move base -->
        <include file="$(find atlas_gazebo)/launch/includes/teb_base.launch.xml" >
            <arg name="robot_name" value="$(arg namespace)" />
        </include>

        <!-- AMCL -->
        <include file="$(find atlas_gazebo)/launch/includes/amcl.launch.xml" >
            <arg name="robot_name" value="$(arg namespace)" />
        </include>

        <node pkg="rviz" type="rviz" name="rviz" args="-d $(find atlas_gazebo)/rviz/nav_$(arg namespace).rviz"/>
    </group>

    <group unless="$(eval arg('robot_name') == '/')">

        <!-- Map server, load map-->
        <node name="map_server" pkg="map_server" type="map_server" ns="$(arg robot_name)" args="$(find atlas_gazebo)/maps/$(arg world).yaml" >
            <param name="frame_id" value="map" />
        </node>

        <!-- launch gazebo simulation environment -->
        <include file="$(find atlas_gazebo)/launch/atlas_on_racetrack.launch">
            <arg name="world" value="$(arg world)" />
            <arg name="robot_name" value="$(arg robot_name)" />
        </include>

        <!-- launch atlas control -->
        <include file="$(find atlas_gazebo)/launch/atlas_control.launch" >
            <arg name="robot_name" value="$(arg robot_name)" />
        </include>

        <!-- move base -->
        <include file="$(find atlas_gazebo)/launch/includes/teb_base.launch.xml" >
            <arg name="robot_name" value="$(arg robot_name)" />
        </include>

        <!-- AMCL -->
        <include file="$(find atlas_gazebo)/launch/includes/amcl.launch.xml" >
            <arg name="robot_name" value="$(arg robot_name)" />
        </include>

        <node pkg="rviz" type="rviz" name="rviz" args="-d $(find atlas_gazebo)/rviz/nav_$(arg robot_name).rviz"/>
    </group>

</launch>
```