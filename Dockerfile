#Docker Image for Summit Kubernetes.
#Author: Axel Galicia

#Node Image version 8 slim
FROM mhart/alpine-node
#Working Directory
WORKDIR /usr/src/app

#Copy source code
COPY . .
#Install dependencies
RUN npm install
#Transpile code
RUN npm run tsc
# Application port
EXPOSE 3000

#Start server
CMD [ "npm", "start" ]


