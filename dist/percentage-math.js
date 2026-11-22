export function percentageChange(base,percent,direction='increase',secondPercent=null,secondDirection='decrease'){
  const firstChange=base*percent/100;
  const afterFirst=base+(direction==='increase'?firstChange:-firstChange);
  const secondChange=secondPercent===null?0:afterFirst*secondPercent/100;
  const final=afterFirst+(secondPercent===null?0:secondDirection==='increase'?secondChange:-secondChange);
  const net=final-base;
  return {base,firstChange,afterFirst,secondChange,final,net,netPercent:net/base*100};
}
