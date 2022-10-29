package domain

type User struct {
	UserId string
	Name   string
}

type RoomResult struct {
	Room         *Room
	MemberStatus string
}

type UserRepository interface {
	SaveUser(user *User) error
	GetJoinedRoomsWithStatuses(userId string) ([]*RoomResult, error)
}

func NewUser(userId string, name string) *User {
	return &User{
		UserId: userId,
		Name:   name,
	}
}
