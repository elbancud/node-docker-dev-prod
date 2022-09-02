# Layers of dockerizing.
# image -> workdir -> copy -> run -> copy

# Specify the base image with version undefined == latest?
FROM node:16
# Set the directory from /app
# Recommended but not necessary
WORKDIR /app
# copy the package into the docker image
# (<package-directory> <outdir-path>
COPY package.json .
# install the dependencies
RUN npm install
# copy the rest of the files
COPY . ./