package domain

// UserとRoomのIdはstring
// それ以外はuint32

type User struct {
	UserId string
	Name   string
}

type UserRepository interface {
	Get(userId string) (*User, error)
	Save(user *User) error
	// Update(user *User) error
	// Delete(user *User) error
}

func NewUser(userId string, name string) *User {
	return &User{
		UserId: userId,
		Name:   name,
	}
}
