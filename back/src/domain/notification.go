package domain

type Notification struct {
	WebhookId   uint32
	RoomId      string
	ServiceName string
	Url         string
}
type NotificationRepository interface {
}
