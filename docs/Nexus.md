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
  
  which will list out all the container running and you can view the nexus container and its port. Once that is done open the browser and give 
    
    localhost:8081
    
Its sometime to load once that is done you will see the Nexus Repository Manager page in your browser.

The default login credentials are admin/admin123 to sign in. Once you have logged in you will see the below screen. And in there you will see many repositories like maven. Here i am going to create a new repo for my node project.

### Create New Repository:<br/>
For the creating a nexus repo for node project we need to create three nexus repo which are 
   
   - npm hosted
   - npm proxy
   - npm group
   
  To create new repo select the create repository button and it will show a list of packages. For my purpose i am going to choose npm packages. Before we select the npm packages we need to create a blob store for each of the packages which we are going to create.
  
  So here we are going to create a **Blob store** by selecting the create blob store button. By selecting that we need to choose what type of file you need like S3 bucket or normal file(choose relevant file you need) and create a new **Name** corressonding repo which you are going to create once that is done and create the blob store. 
  
  Once that is done you can go back to the create repo select the **npm host** and give a name for that and select the blob store which you have created for this repo and select the deployment policy as Allow redeploy and select the create repo button and your repository will be created. The npm host is like a private repo where you store your own dependencies in there.
  
 Once you have create npm hosted repository you need to create two more which are **npm proxy and npm group**. The npm proxy repo is used to proxy all the npm dependencies which you have downloaded from the npm registry and next when you download that it will be cached to this npm proxy repo.
 
 The npm group is used to group all the above repo and post in the a single url to download and for deployment purpose.
 
 For 