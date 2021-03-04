#!/bin/sh

container_name=$2
image_name=$2
port=$2
input_error_info="sh opt.sh stop <container_name>\nsh opt.sh delete_container <container_name>\nsh opt.sh delete_image <image_name>\nsh opt.sh kill_by_port <port>"

if [ -z "$2" ]
then
  echo "${input_error_info}"
  exit 0
fi

case $1 in
  kill_by_port)
    pid="$(lsof -i:"${port}" -t)"
    if [ -n "${pid}" ]
    then
        kill -9 "$pid";
        echo kill progress which port on "${port}" successfully
    fi
    ;;
  stop)
    if [ "$(docker ps | grep "${container_name}" | tail -n 1)" ]
    then
        docker stop "${container_name}"
        echo stop container "${container_name}" successfully
    fi
    ;;
  delete_container)
    if [ "$(docker ps -a | grep "${container_name}" | tail -n 1)" ]
    then
        docker rm "${container_name}"
        echo delete container "${container_name}" successfully
    fi
    ;;
  delete_image)
    if [ "$(docker images | awk '{print $1}' | grep -Fx "${image_name}" | tail -n 1)" ]
    then
        docker rmi "${image_name}"
        echo delete image "${image_name}" successfully
    fi
    ;;
  *)
    echo "${input_error_info}"
    ;;
esac
