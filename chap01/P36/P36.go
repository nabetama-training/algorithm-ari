// Lake Counting
package P36

import "fmt"

var (
	N int
	M int
)

func debug_print(lake *[][]string) {
	for _, line := range *lake {
		fmt.Println(line)
	}
}

func recursiveGrassCount(i, j int, lake *[][]string) bool {
	(*lake)[i][j] = "."

	for dx := -1; dx <= 1; dx++ {
		for dy := -1; dy <= 1; dy++ {
			nx := i + dx
			ny := j + dy

			if 0 <= nx && nx < N && 0 <= ny && ny < M && (*lake)[nx][ny] == "w" {
				return recursiveGrassCount(nx, ny, lake)
			}
		}
	}
	return true
}

func LakeCount(lake [][]string) int {
	var result int
	N = len(lake)		// 縦
	M = len(lake[0])	// 横

	for i := 0; i < N; i++ {
		for j := 0; j < M; j++ {
			if lake[i][j] == "w" {
				recursiveGrassCount(i, j, &lake)
				result++
			}
		}
	}
	return result
}
