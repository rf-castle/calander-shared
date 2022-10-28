FROM golang:1.19.2-bullseye

WORKDIR /go/src/app
COPY go.mod ./go.mod
COPY go.sum ./go.sum
COPY main.go ./main.go
RUN go install -v github.com/pressly/goose/v3/cmd/goose@latest
RUN go get -d -v ./...
RUN go install -v ./...


CMD ["back"]
