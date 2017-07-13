package P34

import "testing"

func TestNewP34(t *testing.T) {
	tests := []struct {
		input []int
		want  int
		ret   bool
	}{
		{input: []int{1, 2, 3, 7}, want: 13, ret: true, },
		{input: []int{1, 2, 3, 7}, want: 19, ret: false, },
		{input: []int{}, want: 0, ret: true, },	// 0枚から0回
		{input: []int{1, 2, 3, 7}, want: 0, ret: true, },	// N枚から0回取る

	}
	for _, test := range tests {
		numbers := NewP34(test.input)
		ret := numbers.pickUpToBecome(test.want)
		if ret != test.ret {
			t.Fatalf("Should not be solve: %v => %v but %t", test.input, test.want, ret)
		}
	}
}
