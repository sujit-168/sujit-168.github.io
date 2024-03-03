---
title: 无监督学习与聚类之 K-means 算法
date: 2022-05-19 15:02:41
categories: [note]
tags:
 - Machine Learning
 - 无监督学习
 - K-means 聚类
copyright: true
---

# 无监督学习与聚类之 K-means 算法

### K-means 原理说明

<!-- more -->

通常，人们根据样本间的某种距离或者相似性来定义聚类，即把相似的（或距离近的）样本聚为同一类，而把不相似的（或距离远的）样本归在其他类。

k-means 算法是一种很常见的聚类算法，它的基本思想是：通过迭代寻找 k 个聚类的一种划分方案，使得用这 k 个聚类的均值来代表相应各类样本时所得的总体误差最小。

k-means 算法的基础是最小误差平方和准则。其代价函数是：

$$ J(c,\mu)=\sum\limits_{i=1}^k||x^{(i)}-\mu_{c^{(i)}}||^2 $$

上式中，$\mu_{c^(i)}$表示第 i 个聚类的均值。我们希望代价函数最小，直观的来说，各类内的样本越相似，其与该类均值间的误差平方越小，对所有类所得到的误差平方求和，即可验证分为 k 类时，各聚类是否是最优的。上式的代价函数无法用解析的方法最小化，只能有迭代的方法。

### 伪代码

- 在样本中选取 k 个点作为初始的质心点（随机选择）

- 当任意一个点的簇分配结果发生改变时

- 对数据集中的每一个数据点

            对每一个质心，计算质心与数据点的距离

            将数据点分配到距离最近的簇

- 对每一个簇，计算簇中所有点的均值，并将均值作为质心

- 判断当前聚类中心与先前的聚类中心点是否一直，若一致，则结束聚类，不一致，重新聚类，如此循环往复

### 代码实现

- 数据生成部分
  
  这里有两种实现方式，一种基于 Matlab 的 mvnrnd 函数，一种基于 Python 的 numpy 包中的 random.normal 方法生成生成具有特定偏移量和相关性且服从高斯分布的随机数。

**data_create.m**（基于 Matlab）

```matlab
% mvnrnd函数可以用于生成不同类别模式的数据，数据要服从正态分布（高斯分布）。

% matlab实现代码如下：
% 均值向量、协方差矩阵
mul = [-3 ,-3];
SIGMA = [1,0;0,1];
data1 = mvnrnd(mul,SIGMA,100);
plot(data1(:,1),data1(:,2),'r+');
hold on;
% 均值向量、协方差矩阵
mul = [3,3];
SIGMA = [1,0; 0,4];
data2 = mvnrnd(mul,SIGMA,100);
plot(data2(:,1),data2(:,2),'b*');

data = [data1;data2];
data = double(data);
% 导出数据集
%dlmwrite('./dataset/data_create.txt',data,' ');           % 以txt文件保存
%csvwrite('./dataset/data_create.csv',data);           % 以csv文件保存

% 推荐调用mat_save2txt函数的文件保存为txt,不会出现需要字符转换的问题
mat_save2txt('./dataset/data_create.txt',data);    % 这里使用相对路径
```

**mat_save2txt.m**

```matlab
% Reference ;https://www.cnblogs.com/tsingke/p/13344020.html
function result = mat_save2txt(savepath,mat)
result=fopen(savepath,'wt'); %写入的文件，各函数后面有说明
[m,n]=size(mat);
 for i=1:1:m
    for j=1:1:n
       if j==n
         fprintf(result,'%g\n',mat(i,j));
       else
        fprintf(result,'%g\t',mat(i,j));
       end
    end
 end
fclose(result);
end
```

**data_creata.py**（基于 Python3）

```python
# 生成一个有标准偏移 axis 的服从高斯分布的随机数
# size=(100,2)
# axis = 偏移量
import numpy as np

def normal_random(size,axis):
    data = np.random.normal(size=(100,2)) + axis
    # print(data)
    return data

data = normal_random((100,2),3)     #测试用例

# 数据保存至浮点数小数点后 3 位
np.savetxt('./dataset/dataset_py.txt',data,fmt = '%0.3f')
print("Data has saved!")")例
```

**Lx_distance.py**

定义了 L1、L2 范数的计算方式，可以直接调用

```py
from numpy import *

# L1、L2 范数
def Lx_distance(vector1,vector2,x):
    # 计算 L1 范数，曼哈顿距离
    if x == 1:
        return sum(abs(vector2-vector1))
    # 计算 L2 范数（欧式距离）
    elif x == 2:
        return sqrt(sum(power(vector2-vector1,2)))
    else:
        print("The x of you input is illegal!,please contact to me!")
```

**K-means.py**

- 读取 txt 数据

```python
# 读取 txt
def read_txt(path):
    dataSet = []
    fileIn = open('.\dataset\data_create.txt')
    for line in fileIn.readlines():
        lineArr = line.strip().strip('\n').split('\t')
        dataSet.append([float(lineArr[0]), float(lineArr[1])])
    print("load data...")
    return dataSet
```

- 随机选取聚类中心

```py
# 随机从所有样本中选取 k 个聚类中心点，这些中心点与样本点数据维度要保持一致
def random_center_point(dataset,k):
    num,dim = dataset.shape
    centroid = zeros((k,dim))
    for i in range(k):
        # 生成随机整数
        # index = int(random.random(0,num))
        # index = randint(0,num)
        index = int(uniform(0, num))
        centroid[i, :] = dataset[index, :]
    print("load data...")
    return centroid
```

- K-means 算法

```python
# K-means 算法
def k_means(dataset,k):
    # 创建一个矩阵用于存储样本点的所属类别和 L2 范数
    num = dataset.shape[0]
    dim = dataset.shape[1]
    update_num = 0       # 迭代次数
    cluster = mat(zeros((num,dim)))
    cluster_stage = False

    # 随机选取样本中心点
    centroids = random_center_point(dataset,k)
    print("cluster is starting...")
    # 计算所有样本与中心点的 L2 范数
    for i in range(num):
        min_dis = 10000.0
        min_index = 0
        for j in range(k):
            #distance =  Lx_distance(centroids[j,:],dataset[i,:],1)      # L1 范数
            distance =  Lx_distance(centroids[j,:],dataset[i,:],2)      # L2 范数
            if distance < min_dis:
                min_dis = distance
                min_index = j

        # 更新存储矩阵
        if cluster[i,0] != min_index:
            cluster_stage = True
            cluster[i,:] = min_index,min_dis**2
    update_num +=1
    # 更新所有的类内中心点
    for j in range(k):
        # np.nonzero()[0] 取出二维数组中的值不为零的第一维元素的下标
        dataset_cluster = dataset[nonzero(cluster[:,0].A == j)[0]]
        centroids[j,:] = mean(dataset_cluster,axis = None)
        update_num += 1

    print('cluster complete!')
    # 返回聚类中心、聚类结果、迭代次数
    return centroids,cluster,update_num
```

- 绘制聚类结果

```py
# 绘制聚类结果
def show2d_cluster(dataset,k,centroid_updated,cluster,correct_rate):
    num,dim = dataset.shape
    if dim !=2:
        print("Sorry!,The dimension of your dataset is not 2! Please check it!")
        return -1
    else:
        print("start plot!")
        mark1 = ['or', 'ob', 'og', 'ok', '^r', '+r', 'sr', 'dr', '<r', 'pr']
        for i in range(num):
            index = int(cluster[i,0])
            plt.plot(dataset[i,0],dataset[i,1],mark1[index])
        # plot the centroid_updated
        mark2 = ['Dr', 'Db', 'Dg', 'Dk', '^b', '+b', 'sb', 'db', '<b', 'pb'] 
        for i in range(k):
            plt.plot(centroid_updated[i,0],centroid_updated[i,1], mark2[i+1], markersize = 11)
        # 绘图标题，x,y 轴标签
        plt.title("The result of cluster ",fontsize=20)
        plt.xlabel("x_position")
        plt.ylabel("y_position")
        plt.show()
```

- 计算正确率

思路：通常情况下对于聚类方法（非监督学习），我们是无法知道其正确率的，但是我们使用已知规律的数据来测试 K-means 方法的性能，所以这是是可以计算出正确率的，K-means 的聚类效果好的先决条件是样本数据各类别数量分布均衡，类内具有良好的积聚性，类间具有较强的差异性。

根据生成的样本数据可知，两类样本数量对等，均为 100，故只需要对聚类结果的分类标签进行数量统计，在选择一类与已知类别数量 $N_{n}$做差，即可求出聚类错误的样本个数 $N_{error}$，再用下式即可求出正确率 $C_{正确}$。

$C_{正确} = (1-\frac{N_{error}}{N_{n}})\times100%$

```python
# K-means 计算正确率专用
# dataset_num 为预先生成数据的各样本个数，为相同值
# cluster 为 K-means 聚类后的分类结果
# k 为预先计算样本
def compute_correct_rate(dataset_num,cluster,k):
    # 为各聚类结果的样本个数初始化为 0
    num = cluster.shape[0]
    cluster_num = zeros(k)
    # 默认各类样本个数一致
    for i in range(num):
        for j in range(k): 
            if cluster[i,0] == j:
                cluster_num[j] += 1
    correct_rate = 1-(abs(dataset_num-cluster_num[0])/dataset_num)
    return correct_rate
```

- 主程序（测试）

```py
if __name__ == "__main__":
    path = 'K-means\dataset\data_create.txt'
    dataset =mat(read_txt(path))
    k = 2
    centroid_updated,cluster,update_num = k_means(dataset,k)

    # 调用 Numpy 保存 array 数据
    savetxt('centroid_updated.txt',centroid_updated,fmt = '%d')
    savetxt('cluster.txt',cluster,fmt = '%d')

     # 显示正确率
    correct_rate = compute_correct_rate(100,cluster,2)
    print("本次聚类迭代：",update_num,'次')
    print("本次聚类正确率 correct_rate:",correct_rate*100,'%')
    # print("本次聚类用时:",time)

    # 聚类结果可视化
    show2d_cluster(dataset,k,centroid_updated,cluster,correct_rate)
```

### 结果分析

```shell
"e:\桌面\新课程实验\pattern recognition and Maching Learning\Experiment\K-means\k-means.py" "
load data...
load data...
cluster is starting...
cluster complete!
本次聚类迭代: 3 次
本次聚类正确率correct_rate: 99.0 %
start plot!
```

可以看到本次聚类迭代了 3 次即完成了聚类，聚类结果正确率高达 99%

![](https://cn-sy1.rains3.com/dfdfgf/blog/K-means_algorithm_for_unsupervised_learning_and_clustering/202205191509097.png)

从图上来看，聚类中心位于类别的中心，本次聚类还是比较成功的。

### 附加测试

- 测试样本生成

```py
import numpy as np

def normal_random(size,axis):
    data = np.random.normal(size=(100,2)) + axis
    # print(data)
    return data

data = normal_random((100,2),3)     #测试用例 1

data1 = normal_random((100,2),3)     #测试用例 2
data2 = normal_random((100,2),1)     #测试用例 2

# hstack((a,b)) 在行上合并
# vstack((a,b)) 在列上合并
a = np.vstack((data1,data2))

# 数据保存至浮点数小数点后 3 位
np.savetxt('./dataset/dataset_py.txt',data,fmt = '%0.3f')

np.savetxt('./dataset/dataset_py_test.txt',a,fmt = '%0.3f')
print("Data has saved!")
```

- 测试程序

```py
if __name__ == "__main__":
    # path = 'K-means\dataset\data_create.txt'        # 生成样本数据 1
    path = 'K-means\dataset\dataset_py_test.txt'    # 测试样本数据 2
```

修改为测试样本数据录取路径

- 测试结果

```shell
"e:\桌面\新课程实验\pattern recognition and Maching Learning\Experiment\K-means\k-means.py" "
.......
本次聚类迭代: 3 次
本次聚类正确率correct_rate: 58.00000000000001 %
start plot!
```

可以看到本次聚类迭代了 3 次也完成了聚类，但聚类结果正确率相较之前，正确率明显下降，只有 58%

![](https://cn-sy1.rains3.com/dfdfgf/blog/K-means_algorithm_for_unsupervised_learning_and_clustering/202205191509687.png)

从图上可以看到聚类结果有明显的聚类错误，主要原因是，测试样本中的类间距离较近，导致无法准确聚类

### 总结

K-means 算法的取得良好的聚类效果的先决条件是样本数据各类别数量分布均衡，类内具有良好的积聚性，类间具有较强的差异性。所以在选取聚类算法时，需要根据数据的实际分布情况来选择合适的方法，做到对症下药，一针见血。
