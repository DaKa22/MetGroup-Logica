class MyMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  dimension() {
    const getDimension = (numeroOrArray, contador = 0) => {
      if (! Array.isArray(numeroOrArray)) return contador

      let contadores = [];
      for (const numero of numeroOrArray) {
        contadores.push(getDimension(numero, contador + 1))
      }
      
      return Math.max(...contadores)
    }

    return getDimension(this.matrix)
  }

  straight() {
    const getStraight = (numeroOrArray) => {
      if (! Array.isArray(numeroOrArray)) return null

      let straights = [];

      for (const numero of numeroOrArray) {
        straights.push(getStraight(numero))
      }

      if (straights.every(straight => straight == null)) return straights.length

      straights.sort()

      if (straights[0] !== straights[straights.length -1]) throw 'Upsss'

      return null
    }

    try {
      getStraight(this.matrix)
      return true
    } catch (error) {
      return false
    }
  }

  compute() {
    const getCompute = (numeroOrArray) => {
      if (! Array.isArray(numeroOrArray)) return numeroOrArray

      let autosuma = 0;
      for (const numero of numeroOrArray) {
        autosuma += getCompute(numero)
      }
      return autosuma
    }

    return getCompute(this.matrix)
  }
}

module.exports = MyMatrix
