package usecase

import "github.com/rf-castle/calander-shared/back/src/domain"

type FilterService struct {
	filterRepository domain.FilterRepository
	memberRepository domain.MemberRepository
}

func (s *FilterService) AddFilter(
	userId string,
	roomId string,
	filterQuery string,
	filteringCalendarId *uint32,
	filterdPublicity domain.Publicity,
	filterdAvailability domain.Availability) error {

	member, err := s.memberRepository.GetByUserIdAndRoomId(userId, roomId)
	if err != nil {
		return err
	}
	s.filterRepository.Create(member.MemberId, filterQuery, filteringCalendarId, filterdPublicity, filterdAvailability)
	return nil
}

func (s *FilterService) SwapFilter(filterAId uint32, filterBId uint32) error {
	filterA, err := s.filterRepository.Get(filterAId)
	if err != nil {
		return err
	}
	filterB, err := s.filterRepository.Get(filterBId)
	if err != nil {
		return err
	}
	filterAOrder := filterA.Order
	filterA.ChangeOrder(filterB.Order)
	filterB.ChangeOrder(filterAOrder)
	err = s.filterRepository.Save(filterA)
	if err != nil {
		return err
	}
	err = s.filterRepository.Save(filterB)
	if err != nil {
		return err
	}
	return nil
}
