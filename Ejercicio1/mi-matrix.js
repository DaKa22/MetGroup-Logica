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
    const getStraight = (numeroOrArray, condicion = true) => {
      if (! Array.isArray(numeroOrArray)) return null

      if (! numeroOrArray.length) return null

      let straights = [];
      for (const numero of numeroOrArray) {
        straights.push(getStraight(numero))
      }

      straights.sort()

      return straights.some(straight => straight.length !== straights[0])

      if (straights.length > 1) {
        
      }
      
      return straights.length

    }

    return getStraight(this.matrix)
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
