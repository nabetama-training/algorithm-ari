package P36

import (
	"testing"
)

func TestP36(t *testing.T) {
	tests := []struct {
		input [][]string
		want  int
	}{
		{
			input: [][]string{
				{"w", ".", ".", ".", ".", ".", ".", ".", ".", "w", "w", "."},
				{".", "w", "w", "w", ".", ".", ".", ".", ".", "w", "w", "w"},
				{".", ".", ".", ".", "w", "w", ".", ".", ".", "w", "w", "."},
				{".", ".", ".", ".", ".", ".", ".", ".", ".", "w", "w", "."},
				{".", ".", ".", ".", ".", ".", ".", ".", ".", "w", ".", "."},
				{".", ".", "w", ".", ".", ".", ".", ".", ".", "w", ".", "."},
				{".", "w", ".", "w", ".", ".", ".", ".", ".", "w", "w", "."},
				{"w", ".", ".", ".", "w", ".", ".", ".", ".", ".", "w", "."},
				{".", "w", ".", "w", ".", ".", ".", ".", ".", ".", "w", "."},
				{".", ".", "w", ".", ".", ".", ".", ".", ".", ".", "w", "."},

			},
			want: 3,
		},
		{
			input: [][]string{
				{".", ".", "w", ".", ".", ".", ".", ".", ".", ".", "w", "."},

			},
			want: 2,
		},
		{
			input: [][]string{
				{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},

			},
			want: 0,
		},
		{
			input: [][]string{
				{},
			},
			want: 0,
		},
		{
			input: [][]string{
				{},
			},
			want: 0,
		},
	}

	for _, test := range tests {
		result, err := LakeCount(test.input)
		if err != nil {
			t.Fatalf("Should be %d, but %v", test.want, result)
		}
	}
}
