package P36

type Masu string
type Line []Masu
type Lake []Line

type Laker interface {}

func (m *Masu) isGrass() bool {
	if *m == "w" {
		return true
	}
	return false
}

func (l *Lake) searchGrassAround(x, y int) {
	for dx := -1; dx <= 1; dx++ {
		for dy := -1; dy <= 1; dy ++ {
			nx := x + dx
			ny := y + dy

			if 0 <= nx && nx < N && 0 <= ny && ny < M && (*l)[nx][ny] == "w" {
				l.searchGrassAround(nx, ny)
			}
		}
	}
}

func LakeCountOrg(lake Lake) int {
	var result int

	for i, line := range lake {
		for j, masu := range line {
			if masu.isGrass() {
				lake[i][j] = "w"
				lake.searchGrassAround(i, j)
				result ++
			}
		}
	}
	return result
}
