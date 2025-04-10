#1. Use the official Node base image
FROM node:122.13.1

#2. Set the working directory inside the container
# Everything from now on will be relative to /app
WORKDIR /app

#3. Copy only package.json + yarn.lock to leverage Docker layer caching
# This way, Docker won't reinstall deps unless package.json changes
COPY package.json yarn.lock ./

#4. Install project dependencies using Yarn
# Note: No glogal yarn install is needed - it's baked into the base image
RUN yarn install

#5. Copy the rest of your application code
# This brings in /server, nodemon.json, etc.
COPY . .

#6. Expose the port your app runs on
# This allows Docker to map traffic from your local machine into the container
EXPOSE 4001

#7. Command to run/start app in production mode
# This should match "yarn start" in your package.json
CMD ["yarn", "start"]