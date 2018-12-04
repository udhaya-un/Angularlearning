![Logo](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/GeppettoIcon.png?raw=true"Logo")

# Docker With Nexus<br/>
   In here we will see how to containerize nexus in Docker.
   
# Prerequisites<br/> 
  [Install docker](https://docs.docker.com/install/)
  
# Nexus Installation<br/>
   Nexus  is a repository manager. It allows you to proxy, collect, and manage your dependencies so that you are not constantly juggling a collection of JARs. It makes it easy to distribute your software. Internally, you configure your build to publish artifacts to Nexus and they then become available to other developers.<br/>
  
### Setting up Nexus in Docker
  To run nexus in docker first you have download the nexus image from the docker hub by giving this command
  
    docker run -d -p 8081:8081 --name nexus sonatype/nexus3
    
 Before that make sure that you dont have anything running in the port 8081 or you can use any port number of your convient.
 After you have pulled the nexus image check what the status of the container by giving this command.
 
    docker ps -a
  
  ![container](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_047.png?raw=true"container")
  
  which will list out all the container running and you can view the nexus container and its port. Once that is done open the browser and give 
    
    localhost:8081
    
   ![browser](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_048.png?raw=true"browser") 
   
Its sometime to load once that is done you will see the Nexus Repository Manager page in your browser.

The default login credentials are admin/admin123 to sign in. Once you have logged in you will see the below screen. And in there you will see many repositories like maven. Here i am going to create a new repo for my node project.

### Create New Repository:<br/>
For the creating a nexus repo for node project we need to create three nexus repo which are 
   
   - npm hosted
   - npm proxy
   - npm group
   
  ![nexusrepo](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_050.png?raw=true"nexusrepo")
  
  To create new repo select the create repository button and it will show a list of packages. For my purpose i am going to choose npm packages. Before we select the npm packages we need to create a blob store for each of the packages which we are going to create. Here i have already created repos and blob store for my node project.
  
  ![previous](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_063.png?raw=true"previous")
  
  So here we are going to create a **Blob store** by selecting the create blob store button. By selecting that we need to choose what type of file you need like S3 bucket or normal file(choose relevant file you need) and create a new **Name** corressonding repo which you are going to create once that is done and create the blob store. 
  
  ![blobstore](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_052.png?raw=true"blobstore")
  
  ![blobstore2](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_053.png?raw=true"blobstore2")
  
  ![blobstore3](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_055.png?raw=true"blobstore3")
  
  ![blobstore4](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_056.png?raw=true"blobstore4")
  
  
  Once that is done you can go back to the create repo select the **npm host** and give a name for that and select the blob store which you have created for this repo and select the deployment policy as Allow redeploy and select the create repo button and your repository will be created. The npm host is like a private repo where you store your own dependencies in there.
  
  ![repo3](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_060.png?raw=true"repo3")
  
 Once you have create npm hosted repository you need to create two more which are **npm proxy and npm group**. 
 
The npm proxy repo is used to proxy all the npm dependencies which you have downloaded from the npm registry and next when you download that it will be cached to this npm proxy repo.
 
 The npm group is used to group all the above repo and post in the a single url to download and for deployment purpose.
 
 For npm proxy we need to create blob store for that corressponding repo name. And create a npm proxy repo by selecting the blob store which you have created for this npm proxy repo and also we need to give this link [http://registry.npmjs.org/] in the Proxy text box and then save it.
 
  ![repo1](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_058.png?raw=true"repo1")
  
  ![repo2](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_059.png?raw=true"repo2")
  
 
 For npm group first we need to create blob store for that corressponding repo name. And create a npm group repo by selecting the blob store name which we have created for this repo. In npm group we will see a list of the other repo which we need to add to the Members box so that all the other will come under the npm group which will generate a single url for those and we can use them for downloading the packages and for deployment.
 
  ![repo4](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_061.png?raw=true"repo4")
  
  ![repo5](https://github.com/KishanRavindran/Angularlearning-app/blob/master/docs/Selection_062.png?raw=true"repo5")
