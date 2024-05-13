import englishCodeData from "../data/english"
import chineseTrCodeData from "../data/chinese_traditional"
import japaneseCodeData from "../data/japanese"
import koreanCodeData from "../data/korean"
import frenchCodeData from "../data/french"
import italianCodeData from "../data/italian"
import czechCodeData from "../data/czech"
import spanishCodeData from "../data/spanish"
import portugueseCodeData from "../data/portuguese"

export const useCryption = () => {
  const numberCodeData = Array.from({ length: englishCodeData.length }, (_, i) =>
    String(i)
  )
  const dataArray = reactive({
    numberCodeData,
    englishCodeData,
    chineseTrCodeData,
    japaneseCodeData,
    koreanCodeData,
    frenchCodeData,
    italianCodeData,
    czechCodeData,
    spanishCodeData,
    portugueseCodeData,
  })
  const convertResult = reactive({
    numberCodeData: {
      title: "數字",
      code: "",
    },
    englishCodeData: {
      title: "英文",
      code: "",
    },
    chineseTrCodeData: {
      title: "中文",
      code: "",
    },
    japaneseCodeData: {
      title: "日語",
      code: "",
    },
    koreanCodeData: {
      title: "韓語",
      code: "",
    },
    frenchCodeData: {
      title: "法語",
      code: "",
    },
    czechCodeData: {
      title: "捷克語",
      code: "",
    },
    spanishCodeData: {
      title: "西班牙語",
      code: "",
    },
    portugueseCodeData: {
      title: "葡萄牙語",
      code: "",
    },
    italianCodeData: {
      title: "義大利語",
      code: "",
    },
  })
  const decodeResult = ref('')

  const convert = (e, key) => {
    let idx = dataArray[key].findIndex((word) => {
      return word === e.target.value.replaceAll(" ", "")
    })
    convertResult.chineseTrCodeData.code = chineseTrCodeData[idx]
    convertResult.englishCodeData.code = englishCodeData[idx]
    convertResult.japaneseCodeData.code = japaneseCodeData[idx]
    convertResult.koreanCodeData.code = koreanCodeData[idx]
    convertResult.frenchCodeData.code = frenchCodeData[idx]
    convertResult.czechCodeData.code = czechCodeData[idx]
    convertResult.spanishCodeData.code = spanishCodeData[idx]
    convertResult.portugueseCodeData.code = portugueseCodeData[idx]
    convertResult.italianCodeData.code = italianCodeData[idx]
    convertResult.numberCodeData.code = numberCodeData[idx]
  }

  const decrypt = (code) => {
    const codeArray = code.split(",")
    const decodeArray = codeArray.map((item) => {
      return englishCodeData[item]
    })
    decodeResult.value = decodeArray.join().replaceAll(",", " ")

  }

  return {
    convertResult,
    convert,
    decrypt,
    decodeResult
  }
}
