
FROM node:current-alpine

WORKDIR /widgets

ENV PATH /widgets/node_modules/.bin:$PATH

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
