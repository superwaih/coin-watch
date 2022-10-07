export function covertPercent(x) {
    return (x * 100).toPrecision(4) ;
  }

  export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

