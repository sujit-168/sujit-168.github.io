---
title: Gazebo 尝鲜食谱
date: 2024-03-13 19:10:23
categories: [ROS]
tags: [ROS1,  Gazebo]
copyright: true
---

# Gazebo 尝鲜食谱 <Badge text="持续更新" type="warning" />

通常来说，默认情况下我们使用 Gazebo 的默认物理引擎 ODE 对环境进行仿真，那么 Gazebo 还有什么其他物理引擎可以选择呢？

::: info 小知识
目前 Gazebo 支持 4 个物理引擎：ode、bullet 和 simbody dart。
:::

## Gazebo 与 ROS 的接口

- [gazebo_ros_pkgs](https://classic.gazebosim.org/tutorials?tut=ros_installing&cat=connect_ros#TestingGazebowithROSIntegration)

## Gazebo 的用户 UI 工具

- [GazeboSim](https://classic.gazebosim.org/tutorials?cat=guided_b&tut=guided_b2)

## Gazebo 用户手册

- [Gazebo 用户手册](https://classic.gazebosim.org/tutorials/browse)
## 环境参数

描述一个物体常见的物理参数，比如质量、摩擦、碰撞、重力等。下面的内容将介绍在 Gazebo 中我们该如何配置这些参数。注意下面的内容均基于默认物理引擎 ode 进行讲解。

### 质量 {#mass}

首先是质量，质量是物体在三维空间中受到的力的大小和方向的度量。在 Gazebo 中，质量参数被定义为一个 `<mass>` 标签

```xml
<mass>1665.21</mass>
```

在这个例子中，质量参数被定义为 1665.21 kg。有时候，我们使用 SolidWorks，Fusion 360, Blender 等建模软件来创建模型，当使用这些工具导出 URDF 模型时，我们可以使用这些工具提供的质量参数。当然有时这些参数可能并不准确，所以我们需要手动调整这些参数。比如你的 base_link 和你的 wheel_link 的质量参数比例相差不大，那么这时就需要手动调整。

根据基本物理规律，质量越大，物体受到的力越大，在地球上，如果忽略地磁效应的影响，将重力系数 g 设置为 9.8，那么重力 G 有下面的表达式可以得出

$$
G = mg(kg * m/s^2)，m 为物体的质量
$$
### 重力 {#Gravity}

重力是物体受到的力，在 Gazebo 中，重力被定义为一个 `<gravity>` 标签

```xml
<gravity>-9.8</gravity>
```

在这个例子中，重力参数被定义为 $9.8 m/s^2$，方向为垂直地面向下。

### 摩擦  {#Friction}

- [Brief: Friction parameters](https://classic.gazebosim.org/tutorials?tut=physics_params&cat=physics)

摩擦是物体之间相互作用的物理特性，在 Gazebo 中，摩擦被定义为一个 `<friction>` 标签，在这个标签中，我们可以定义摩擦系数，摩擦系数越大，物体之间的摩擦越大。

$$
F_{\mu} = \mu * F_{N}，
$$

其中，$F_{\mu}$ 为摩擦力，$\mu$ 为摩擦系数，$F_{N}$ 为法向接触力。

当两个物体发生碰撞时，会产生摩擦项，在 ODE 中，摩擦项被定义为一个 `<mu>` 和 `<mu2>` 标签。

根据官方的文档，

- `mu` 是第一个摩擦方向的库仑摩擦系数。

- `mu2` 是第二摩擦方向（垂直于第一摩擦方向）的摩擦系数。

`如何更好的指定 friction 系数呢？`可以参考[文档](http://sdformat.org/spec?ver=1.5&elem=collision#surface_friction)，要着重看哈。

```xml
<surface>
  <friction>
      <ode>
        <mu>100</mu>
        <mu2>50</mu2>
      </ode>
      <torsional>
        <ode/>
      </torsional>
  </friction>
  <contact>
      <ode/>
  </contact>
  <bounce/>
</surface>
```

在上面这个例子中，第一个摩擦方向的库仑摩擦系数为 100，第二个摩擦方向的库仑摩擦系数为 50。当其值为 0 时，表示理想状态下的没有摩擦。而较大的值表示较大的摩擦。各种材料的摩擦系数可以参考 [这里](https://www.engineeringtoolbox.com/friction-coefficients-d_778.html)。

- [Friction](https://classic.gazebosim.org/tutorials?tut=friction) 

#### 转动摩擦  {#Torsional friction}

扭转摩擦扭矩根据接触深度和表面半径计算如下：（您可以在此处找到更详细的计算方法）

$$
T = 3*PI/16 * a * coefficient * N
$$

如上式所示，与平移摩擦不同，扭转摩擦不仅仅取决于法向力和摩擦系数。它还取决于表面之间的接触区域。

- $3 * PI / 16$ ：常数约等于 0.589

- T：扭转摩擦引起的扭矩。

- N：接触时的法向力。

- 系数：扭转摩擦系数。这通常与平移摩擦系数 mu 和 mu2 相同。

- a：接触面片半径（patch_radius 以 SDF 为单位）。这是曲面之间接触面积的半径。平面顶部的球体会生成一个圆形的斑块区域，该区域取决于球体半径和接触深度，如下所示。

![](http://mirror.ghproxy.com/https://raw.githubusercontent.com/osrf/gazebo_tutorials/master/torsional_friction/files/radius_depth.png)

$$
a = \sqrt{R^2 + h^2}
$$

- R：接触点处的表面半径（surface_radius 以 SDF 为单位）。

- d: Contact depth. d：接触深度。

SDF 提供了两种对接触面进行参数化的方法。用户可以定义一个 patch_radius（上面的 a），它与接触深度无关，它总是相同的，或者一个 surface_radius（上面的 R），它与接触深度一起使用。请注意，在这两种情况下，用户都为整个曲面指定一个值，因此为非球面选取值可能需要微调。

要在方法之间进行选择，可以将 use_patch_radius 标记设置为 true patch_radius for 和 false 以使用 surface_radius。

- 系数：与 mu 和 mu2 一样，系数的默认值为 1.0。

- use_patch_radius：默认为 True，因此使用 the patch_radius。

- patch_radius：默认为零，所以即使 coefficient 设置了，也不会有扭转摩擦。

- surface_radius：默认为零，所以即使设置 coefficient 了，也不会有扭转摩擦。

下面是使用 patch_radius 的示例：

```shell

<collision ...>
  ...
  <surface>
    <friction>
      <torsional>
        <coefficient>1.0</coefficient>
        <surface_radius>0.5</surface_radius>
        <use_patch_radius>false</use_patch_radius>
      </torsional>
    </friction>
    ...
  </surface>
</collision>
```

- [Torsional friction](https://classic.gazebosim.org/tutorials?tut=torsional_friction&cat=physics)

### 碰撞 {#Collision}


- [Collision](http://sdformat.org/spec?elem=collision)
- [Collision Class Reference](https://osrf-distributions.s3.amazonaws.com/gazebo/api/dev/classgazebo_1_1physics_1_1Collision.html)
- [Collisions](https://boschresearch.github.io/pcg_gazebo_pkgs/tutorials/parsers/sdf/collisions/)
- [Surface and collision properties](https://boschresearch.github.io/pcg_gazebo_pkgs/tutorials/simulation/surface_collision_properties/)

## sdf 模型

与 [urdf](https://wiki.ros.org/urdf/XML/model) 类似，[sdf](http://sdformat.org/) 文件也是用来定义物体的，通用使用 XML 格式来描述物体的结构。但两者的区别在于，sdf 文件中可以不仅包含物体的物理属性，例如质量、摩擦、碰撞等。还可以定义环境的物理属性，例如重力、风力等。

## .world 模型制作

- [Gazebo Worlds](https://dev.px4.io/v1.11_noredirect/en/simulation/gazebo_worlds.html)

在 Gazebo 中我们通常会使用 .world 文件来定义仿真环境。当你仔细查看 .world 文件时，你会发现它其实就是一个 .sdf 文件。一个 .world 文件中可以包含多个模型，并且可以设置模型的位置、姿态、碰撞等属性。它的主要结构如下：

```xml
<sdf version='1.6'>
  <world name='default'>
    <light name='sun' type='directional'>
      <cast_shadows>1</cast_shadows>
      <pose frame=''>0 0 10 0 -0 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <attenuation>
        <range>1000</range>
        <constant>0.9</constant>
        <linear>0.01</linear>
        <quadratic>0.001</quadratic>
      </attenuation>
      <direction>-0.5 0.1 -0.9</direction>
    </light>
    <model name='ground_plane'>
      <static>1</static>
      <link name='link'>
        <collision name='collision'>
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <surface>
            <friction>
              <ode>
                <mu>100</mu>
                <mu2>50</mu2>
              </ode>
              <torsional>
                <ode/>
              </torsional>
            </friction>
            <contact>
              <ode/>
            </contact>
            <bounce/>
          </surface>
          <max_contacts>10</max_contacts>
        </collision>
        <visual name='visual'>
          <cast_shadows>0</cast_shadows>
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <material>
            <script>
              <uri>file://media/materials/scripts/gazebo.material</uri>
              <name>Gazebo/Grey</name>
            </script>
          </material>
        </visual>
        <self_collide>0</self_collide>
        <enable_wind>0</enable_wind>
        <kinematic>0</kinematic>
      </link>
    </model>
    <gravity>0 0 -9.8</gravity>
    <magnetic_field>6e-06 2.3e-05 -4.2e-05</magnetic_field>
    <atmosphere type='adiabatic'/>
    <physics name='default_physics' default='0' type='ode'>
      <max_step_size>0.001</max_step_size>
      <real_time_factor>1</real_time_factor>
      <real_time_update_rate>1000</real_time_update_rate>
    </physics>
    <scene>
      <ambient>0.4 0.4 0.4 1</ambient>
      <background>0.7 0.7 0.7 1</background>
      <shadows>1</shadows>
    </scene>
    <audio>
      <device>default</device>
    </audio>
    <wind/>
    <spherical_coordinates>
      <surface_model>EARTH_WGS84</surface_model>
      <latitude_deg>0</latitude_deg>
      <longitude_deg>0</longitude_deg>
      <elevation>0</elevation>
      <heading_deg>0</heading_deg>
    </spherical_coordinates>
    <model name='altas'>
      <link name='base_link'>
        <pose frame=''>0 0 0 0 -0 0</pose>
        <inertial>
          <pose frame=''>-0.05223 -0.083962 0.198622 0 -0 0</pose>
          <mass>1665.21</mass>
          <inertia>
            <ixx>7770.35</ixx>
            <ixy>-6.70196</ixy>
            <ixz>-666.722</ixz>
            <iyy>29580.2</iyy>
            <iyz>56.5793</iyz>
            <izz>32653</izz>
          </inertia>
        </inertial>
        <collision name='base_link_collision'>
          <pose frame=''>0 0 0 0 -0 0</pose>
          <geometry>
            <mesh>
              <scale>1 1 1</scale>
              <uri>altas/meshes/base_link.dae</uri>
            </mesh>
          </geometry>
          <max_contacts>10</max_contacts>
          <surface>
            <contact>
              <ode/>
            </contact>
            <bounce/>
            <friction>
              <torsional>
                <ode/>
              </torsional>
              <ode/>
            </friction>
          </surface>
        </collision>
        <collision name='base_link_fixed_joint_lump__wall_collision_1'>
          <pose frame=''>0 0 0 1.5708 -0 0</pose>
          <geometry>
            <mesh>
              <scale>1 1 1</scale>
              <uri>altas/meshes/wall.STL</uri>
            </mesh>
          </geometry>
          <max_contacts>10</max_contacts>
          <surface>
            <contact>
              <ode/>
            </contact>
            <bounce/>
            <friction>
              <torsional>
                <ode/>
              </torsional>
              <ode/>
            </friction>
          </surface>
        </collision>
        <visual name='base_link_visual'>
          <pose frame=''>0 0 0 0 -0 0</pose>
          <geometry>
            <mesh>
              <scale>1 1 1</scale>
              <uri>altas/meshes/base_link.dae</uri>
            </mesh>
          </geometry>
        </visual>
        <visual name='base_link_fixed_joint_lump__wall_visual_1'>
          <pose frame=''>0 0 0 1.5708 -0 0</pose>
          <geometry>
            <mesh>
              <scale>1 1 1</scale>
              <uri>altas/meshes/wall.STL</uri>
            </mesh>
          </geometry>
        </visual>
        <self_collide>0</self_collide>
        <enable_wind>0</enable_wind>
        <kinematic>0</kinematic>
      </link>
      <pose frame=''>0 0 0 0 -0 0</pose>
    </model>
    <state world_name='default'>
      <sim_time>96 74000000</sim_time>
      <real_time>96 491205574</real_time>
      <wall_time>1621394448 140700159</wall_time>
      <iterations>96074</iterations>
      <model name='ground_plane'>
        <pose frame=''>0 0 0 0 -0 0</pose>
        <scale>1 1 1</scale>
        <link name='link'>
          <pose frame=''>0 0 0 0 -0 0</pose>
          <velocity>0 0 0 0 -0 0</velocity>
          <acceleration>0 0 0 0 -0 0</acceleration>
          <wrench>0 0 0 0 -0 0</wrench>
        </link>
      </model>
      <model name='altas'>
        <pose frame=''>-1.40308 -1.87573 0.004995 -1.5708 -0 1.58297</pose>
        <scale>1 1 1</scale>
        <link name='base_link'>
          <pose frame=''>-1.40308 -1.87573 0.004995 -1.5708 -0 1.58297</pose>
          <velocity>0 0 0 0 -0 0</velocity>
          <acceleration>-0.002002 -0.002596 -9.74986 0.009339 -0.159019 -0.000231</acceleration>
          <wrench>-3.33354 -4.32307 -16235.6 0 -0 0</wrench>
        </link>
      </model>
      <light name='sun'>
        <pose frame=''>0 0 10 0 -0 0</pose>
      </light>
    </state>
    <gui fullscreen='0'>
      <camera name='user_camera'>
        <pose frame=''>4.53606 -3.88965 20.6647 0 1.33164 2.96418</pose>
        <view_controller>orbit</view_controller>
        <projection_type>perspective</projection_type>
      </camera>
    </gui>
  </world>
</sdf>
```

### 如何在 launch 文件中导入 world 文件

```xml
<?xml version="1.0"?>
<launch>

  <!-- these are the arguments you can pass this launch file, for example paused:=true -->
  <arg name="paused" default="false"/>
  <arg name="use_sim_time" default="true"/>
  <arg name="extra_gazebo_args" default=""/>
  <arg name="gui" default="true"/>
  <arg name="recording" default="false"/>
  <!-- Note that 'headless' is currently non-functional.  See gazebo_ros_pkgs issue #491 (-r arg does not disable
       rendering, but instead enables recording). The arg definition has been left here to prevent breaking downstream
       launch files, but it does nothing. -->
  <arg name="headless" default="false"/>
  <arg name="debug" default="false"/>
  <arg name="physics" default="ode"/>
  <arg name="verbose" default="false"/>
  <arg name="output" default="screen"/>
  <arg name="world_name" default="worlds/empty.world"/> <!-- Note: the world_name is with respect to GAZEBO_RESOURCE_PATH environmental variable -->
  <arg name="respawn_gazebo" default="false"/>
  <arg name="use_clock_frequency" default="false"/>
  <arg name="pub_clock_frequency" default="100"/>
  <arg name="enable_ros_network" default="true" />
  <arg name="server_required" default="false"/>
  <arg name="gui_required" default="false"/>

  <!-- set use_sim_time flag -->
  <param name="/use_sim_time" value="$(arg use_sim_time)"/>

  <!-- set command arguments -->
  <arg unless="$(arg paused)" name="command_arg1" value=""/>
  <arg     if="$(arg paused)" name="command_arg1" value="-u"/>
  <arg unless="$(arg recording)" name="command_arg2" value=""/>
  <arg     if="$(arg recording)" name="command_arg2" value="-r"/>
  <arg unless="$(arg verbose)" name="command_arg3" value=""/>
  <arg     if="$(arg verbose)" name="command_arg3" value="--verbose"/>
  <arg unless="$(arg debug)" name="script_type" value="gzserver"/>
  <arg     if="$(arg debug)" name="script_type" value="debug"/>

  <!-- start gazebo server-->
  <group if="$(arg use_clock_frequency)">
    <param name="gazebo/pub_clock_frequency" value="$(arg pub_clock_frequency)" />
  </group>
  <group>
    <param name="gazebo/enable_ros_network" value="$(arg enable_ros_network)" />
  </group>
  <node name="gazebo" pkg="gazebo_ros" type="$(arg script_type)" respawn="$(arg respawn_gazebo)" output="$(arg output)"
	args="$(arg command_arg1) $(arg command_arg2) $(arg command_arg3) -e $(arg physics) $(arg extra_gazebo_args) $(arg world_name)"
  required="$(arg server_required)" />

  <!-- start gazebo client -->
  <group if="$(arg gui)">
    <node name="gazebo_gui" pkg="gazebo_ros" type="gzclient" respawn="false" output="$(arg output)" args="$(arg command_arg3)"
    required="$(arg gui_required)"/>
  </group>

</launch>
```

## 一些有趣的东西

### 在指定位置 respawn sdf/urdf 模型？

**spawn_model.launch**

```xml
<launch>
    <!-- spawn model params -->
    <param name="model_path" type="str" value="$(find tianracer_gazebo)/model/construction_cone/model.sdf" />
    <param name="model_name" type="str" value="construction_cone" />

    <!-- model_type : sdf or urdf  -->
    <param name="model_type" type="str" value="sdf" />
    <!-- <param name="model_type" type="str" value="urdf" /> -->
    <param name="pose_data_path" type="str" value="$(find tianracer_gazebo)/config/spawn_pose.yaml" />

    <node name="spawn_xml_model" pkg="tianracer_gazebo" type="spawn_xml_model.py" output="screen" />
</launch> 
```

**spawn_pose.yaml**

```yaml
waypoints:
- frame_id: map
  name: -2.075146198272705_-1.9217779636383057
  pose:
    orientation:
      w: 1.0
      x: 0.0
      y: 0.0
      z: 0.0
    position:
      x: -2.075146198272705
      y: -1.9217779636383057
      z: 0.00
- frame_id: map
  name: -4.039107322692871_-3.328923225402832
  pose:
    orientation:
      w: 1.0
      x: 0.0
      y: 0.0
      z: 0.0
    position:
      x: -4.133500099182129
      y: -2.4157185554504395
      z: 0.00
- frame_id: map
  name: -1.3580658435821533_-6.8545451164245605
  pose:
    orientation:
      w: 1.0
      x: 0.0
      y: 0.0
      z: 0.0
    position:
      x: 0.2158558435821533
      y: -7.1376811164245605
      z: 0.00
- frame_id: map
  name: -1.3580658435821533_-6.8545451164245605
  pose:
    orientation:
      w: 1.0
      x: 0.0
      y: 0.0
      z: 0.0
    position:
      x: 0.2131809139251709
      y: -7.830002784729
      z: 0.00

```

**spawn_xml_model.py**

```py

#! /usr/bin/python3
# -*- coding: utf-8 -*-

import rospy
import rospkg as pkg
from gazebo_msgs.srv import SpawnModel, SpawnModelRequest, SpawnModelResponse
from geometry_msgs.msg import Pose, Quaternion
import waypoint_race.utils as utils
import yaml

class SpawnXmlModel:
    
    def __init__(self, model_path, pose_path, model_type):  
        '''
        model_path : sdf or urdf path absolutely
        pose_path : a .yaml file contain some pose
        model_type : to select /gazebo/spawn_sdf_model or /gazebo/spawn_urdf_model
        '''
        
        self.pose = Pose()
        self._counter = 0
        rospy.init_node('spawn_model', anonymous=True)
        self.spawn_model_service = rospy.ServiceProxy('/gazebo/spawn_' + model_type + '_model', SpawnModel)
        self.model_xml = self.read_xml(model_path)
        self._pose_data = utils.get_waypoints(pose_path)
        rospy.loginfo("Reached the end of the waypoint list: %d", len(self._pose_data))

    def read_xml(self, file_path):
        '''
        read sdf or urdf model from file
        '''
        try:
            f = open(file_path,'r')
            sdf = f.read()
            f.close()
        except:
            rospy.logerr("Could not open file: %s", file_path)
            sdf = None
        return sdf

    def update_pose(self):
        '''
        update self.pose value by add self._counter
        '''
        next_pose = None
        next_pose = self._pose_data[self._counter]
        self.pose = utils.create_geometry_pose(next_pose)
        self._counter = self._counter + 1
        rospy.loginfo("Received %d goal \n pose: %s", self._counter, self.pose)


    def check_session(self):
        '''
        check if the pose in yaml has updated completely
        '''
        if self._counter == len(self._pose_data):
            Finished = True
        else:
            self.update_pose()
            Finished = False
        return Finished
  
    def spawn_model(self, model_name):
        '''
        model_name: mode_name spawned in gazebo 
        '''
        spawn_request = SpawnModelRequest()
        resp = SpawnModelResponse()
        
        spawn_request.model_name = model_name + '_'  + str(self._counter)

        rospy.loginfo("Spawning model: %s", spawn_request.model_name)

        spawn_request.model_xml = self.model_xml
        spawn_request.initial_pose = self.pose
        spawn_request.robot_namespace = ""
        spawn_request.reference_frame = "world"

        rospy.wait_for_service('/gazebo/spawn_' + model_type + '_model')
        resp = self.spawn_model_service(spawn_request)

        return resp

if __name__ == '__main__':

    # set some default params
    pkg = pkg.RosPack()
    pose_data_path = pkg.get_path('tianracer_gazebo') + '/config/spawn.yaml'
    model_path = pkg.get_path('tianracer_gazebo') + '/model/construction_cone/model.sdf'

    # get params from parameter server
    model_name = rospy.get_param("model_name", "model_name")
    model_path = rospy.get_param("model_path", model_path)
    model_type = rospy.get_param("model_type", "sdf")
    pose_path = rospy.get_param("pose_data_path", pose_data_path)

    spawner = SpawnXmlModel(model_path, pose_path, model_type="sdf")
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        rate.sleep()
        Finished = spawner.check_session()
        if Finished:
            break
            rospy.loginfo("Spawn session has finished!")
        else:
            spawn_resp = spawner.spawn_model(model_name)
            rospy.loginfo('Model spawn {} : {},\n{}'.format(spawner._counter, spawn_resp.success, spawn_resp.status_message))

```

### 基于 python 切换不同的物理引擎

- [Setting up different physics engines](https://boschresearch.github.io/pcg_gazebo_pkgs/tutorials/simulation/physics_engines/)

### gazebo 引擎如何模拟无人机飞行

- [How does Gazebo's physics engine simulate flight of a drone or an UAV?](https://robotics.stackexchange.com/questions/104166/how-does-gazebos-physics-engine-simulate-flight-of-a-drone-or-an-uav)