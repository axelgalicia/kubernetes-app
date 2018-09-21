#Docker Image for Summit Kubernetes.
#Author: Axel Galicia

#Node Image version 8 alpine node
FROM mhart/alpine-node
#Working Directory
WORKDIR /usr/src/app

#Copy source code
COPY dist/ ./dist
COPY package*.json ./
#Install only required dependencies
RUN npm install --production
# Application port
EXPOSE 3000

#Start server
CMD [ "npm", "start" ]


