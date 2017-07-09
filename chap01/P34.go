package main

import (
	"fmt"
	"os"
)

type P34 struct {
	Numbers []int
	Want    int // この数に出来るか
}

func NewP34(numbers []int) *P34 {
	return &P34{
		Numbers: numbers,
	}
}

func (p *P34) solve(idx, sum int) bool {
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

func (p *P34) pickUpToBecome(want int) bool {
	p.Want = want
	if p.solve(0, 0) {
		return true
	}
	return false
}

func (p *P34) isLast() int {
	return len(p.Numbers)
}

func main() {
	numbers := NewP34([]int{1, 2, 3, 7})
	if numbers.pickUpToBecome(19) {
		fmt.Println("dekiru!")
		os.Exit(0)
	}
	fmt.Println("dekineee!")
	os.Exit(1)
}
