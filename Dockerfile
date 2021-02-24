FROM vuejs/ci
WORKDIR /code
COPY . .
CMD npm run dev
