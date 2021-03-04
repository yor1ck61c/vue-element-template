FROM vuejs/ci
WORKDIR /code
COPY . .
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
CMD npm run preview
