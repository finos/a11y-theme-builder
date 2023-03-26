FROM node:16
RUN node -v
# Copy source
RUN mkdir $HOME/code
COPY ./ $HOME/code
WORKDIR $HOME/code
# Change ownership of all files
USER 0
RUN chown -R 1001 $HOME/code
RUN chmod -R 777 $HOME/code
#USER 1001
EXPOSE 3001
# Run the build
RUN npm run build
# Start the app
CMD npm run debug
