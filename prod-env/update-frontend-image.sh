                                                                                              update-frontend-image.sh                                                                                                            
#!/bin/bash
sudo usermod -a -G docker ${USER}
docker-credential-gcr configure-docker
docker stop rbc-library-ui
docker rm rbc-library-ui
docker rmi $(docker images | grep "rbc-library-ui")
docker run -dp 80:80 --env-file /home/pd-library/.ui-service_env --name=rbc-library-ui gcr.io/prod-pd-library/rbc-library-ui:$1
docker container ls -a