FROM golang:1.19.2-bullseye

WORKDIR /go/src/app
COPY go.mod ./go.mod
COPY go.sum ./go.sum

RUN go get -d -v ./...
RUN go install -v ./...


CMD ["back"]
