package list

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Kana struct {
	Id        int    `json:"id"`
	Hiri      string `json:"hiri"`
	Kata      string `json:"kata"`
	Syllabary string `json:"syllabary"`
}

func HandleList(ctx *gin.Context) {
	list := readFile()
	ctx.JSON(http.StatusOK, list)
}

func readFile() []Kana {

	file, _ := ioutil.ReadFile("./kana.json")
	data := make([]Kana, 0)
	_ = json.Unmarshal(file, &data)

	return data
}
