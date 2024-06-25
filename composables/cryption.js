import englishCodeData from "../Data/english"
import chineseTrCodeData from "../Data/chinese_traditional"
import japaneseCodeData from "../Data/japanese"
import koreanCodeData from "../Data/korean"
import frenchCodeData from "../Data/french"
import italianCodeData from "../Data/italian"
import czechCodeData from "../Data/czech"
import spanishCodeData from "../Data/spanish"
import portugueseCodeData from "../Data/portuguese"

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
  const encryptionCode = ref('')
  const decryptionCode = ref('')

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

  //  加密
  const encrypt = () => {
    const replaceSpace = decryptionCode.value.replace(/-|\s/g, ",")
    const wordData = replaceSpace.split(",")
    const result = wordData.filter((word) => {
      if (word) return true
    }).map((word) => {
      const idxArr = dataArray['englishCodeData'].findIndex((item) => {
        return word == item
      })
      return idxArr
    })

    decryptionCode.value = ''
    encryptionCode.value = result.join().replaceAll(",", "-")
  }
  //  解密
  const decrypt = () => {
    const replaceSpace = encryptionCode.value.replace(/-|\s/g, ",")
    const numberData = replaceSpace.split(",")
    const result = numberData.map((item) => {
      return englishCodeData[item]
    })
    encryptionCode.value = ''
    decryptionCode.value = result.join().replaceAll(",", " ")

  }

  return {
    convertResult,
    convert,
    decrypt,
    decryptionCode,
    encrypt,
    encryptionCode
  }
}
