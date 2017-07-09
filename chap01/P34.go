package main

import (
	"fmt"
	"os"
)

type P34 struct {
	Numbers []int
	Want    int   // この数に出来るか
	lines   int   // 何回取るか
}

func NewP34(lines, want int, numbers []int) *P34 {
	return &P34{
		Numbers: numbers,
		Want:    want,
		lines:   lines,
	}
}

func (p *P34) solve(idx, sum int) bool {
	if idx == p.lines {	// 最後までチェックした？
		return p.Want == sum
	}
	if p.solve(idx + 1, sum){
		return true
	}
	if p.solve(idx + 1, sum + p.Numbers[idx]) {
		return true
	}
	return false
}

func (p *P34) couldBeWant() bool {
	if p.solve(0, 0) {
		return true
	}
	return false
}

func main() {
	numbers := NewP34(4, 10, []int{1,2,3,7})
	if numbers.couldBeWant() {
		fmt.Println("dekiru!")
		os.Exit(0)
	}
	os.Exit(1)
}