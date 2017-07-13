package P34

type Box struct {
	Numbers []int
	Want    int // この数に出来るか
}

func NewP34(numbers []int) *Box {
	return &Box{
		Numbers: numbers,
	}
}

func (p *Box) solve(idx, sum int) bool {
	if idx == p.isLast() { // 最後までチェックした？
		return p.Want == sum
	}
	if p.solve(idx+1, sum) {
		return true
	}
	if p.solve(idx+1, sum+p.Numbers[idx]) {
		return true
	}
	return false
}

func (p *Box) pickUpToBecome(want int) bool {
	p.Want = want
	if p.solve(0, 0) {
		return true
	}
	return false
}

func (p *Box) isLast() int {
	return len(p.Numbers)
}
