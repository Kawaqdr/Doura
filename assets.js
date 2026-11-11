/* Doura asset registry and Three.js r128-compatible geometry helpers. */
(function(global){
 'use strict';
 const GLB={
  runner:'https://files.innerscene.com/library/locomotion-collection-sam-3d-person-animated-dc23800f/735aec6a564c1def48e8/locomotion-collection-sam-3d-person-animated.glb',
  runnerFallback:'https://gobkit.com/freebies/human003/Scout.glb',
  deer:'https://gobkit.com/freebies/animal006/Doe.glb',
  fox:'https://gobkit.com/freebies/animal006/Fox.glb'
 };
 function capsuleGeometry(radius,tubeLength,capSegments=5,radialSegments=10){
  const points=[];
  for(let i=0;i<=capSegments;i++){
   const a=-Math.PI/2+(Math.PI/2)*(i/capSegments);
   points.push(new THREE.Vector2(radius*Math.cos(a),-tubeLength/2+radius*Math.sin(a)));
  }
  for(let i=0;i<=capSegments;i++){
   const a=(Math.PI/2)*(i/capSegments);
   points.push(new THREE.Vector2(radius*Math.cos(a),tubeLength/2+radius*Math.sin(a)));
  }
  const geometry=new THREE.LatheGeometry(points,radialSegments);
  geometry.computeVertexNormals();
  return geometry;
 }
 global.DouraAssets=Object.freeze({GLB,capsuleGeometry});
})(window);
