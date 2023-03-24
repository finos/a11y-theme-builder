FROM node:16
RUN node -v
# Copy source
RUN mkdir $HOME/app
COPY code $HOME/app
WORKDIR $HOME/app
# Change ownership of all files
USER 0
RUN chown -R 1001 $HOME/app
RUN chmod -R 777 $HOME/app
#USER 1001
EXPOSE 3001
# Run the build
RUN npm run build
# Start the app
CMD npm run debug
