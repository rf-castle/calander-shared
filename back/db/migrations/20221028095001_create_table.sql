
-- +goose Up
-- +goose StatementBegin
CREATE TABLE Users (
  user_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE OriginalCalenders (
  calender_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(255) NOT NULL
    REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  url VARCHAR(1023) NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE (user_id, url)
);

CREATE TABLE Filters (
  filter_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  member_id INT UNSIGNED NOT NULL
    REFERENCES Members(member_id) ON DELETE CASCADE ON UPDATE CASCADE,
  filter_order INT UNSIGNED NOT NULL,
  filter_query VARCHAR(255) NOT NULL,
  filtering_calender_id INT UNSIGNED
    REFERENCES OriginalCalenders(calender_id) ON DELETE CASCADE ON UPDATE CASCADE,
  filterd_publicity ENUM('open', 'shadow') NOT NULL,
  filterd_availability ENUM('ok', 'so-so', 'ng', 'ignore') NOT NULL,
  UNIQUE (member_id, filter_order)
);

CREATE TABLE Members (
  member_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(255) NOT NULL
    REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  room_id VARCHAR(255) NOT NULL
    REFERENCES Rooms(room_id) ON DELETE CASCADE ON UPDATE CASCADE,
  nickname VARCHAR(255) NOT NULL,
  role ENUM('admin', 'general', 'waiting for approval') NOT NULL,
  UNIQUE (user_id, room_id)
);

CREATE TABLE Rooms (
  room_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  primary_admin_id VARCHAR(255) NOT NULL
    REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Webhooks (
  webhook_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  room_id VARCHAR(255) NOT NULL
    REFERENCES Rooms(room_id) ON DELETE CASCADE ON UPDATE CASCADE,
  service_name VARCHAR(255) NOT NULL,
  url VARCHAR(1023) NOT NULL
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE Webhooks
DROP TABLE Rooms
DROP TABLE Members
DROP TABLE Filters
DROP TABLE OriginalCalenders
DROP TABLE Users
-- +goose StatementEnd