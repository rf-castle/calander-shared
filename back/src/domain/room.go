package domain

type Room struct {
	RoomId         string
	Name           string
	PrimaryAdminId string
}

type RoomRepository interface {
	Save(room *Room) error
	Get(roomId string) (*Room, error)
}

func NewRoom(primaryAdminId string, name string) *Room {
	return &Room{
		PrimaryAdminId: primaryAdminId,
		Name:           name,
	}
}
