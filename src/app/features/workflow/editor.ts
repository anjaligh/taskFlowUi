import { Injector } from "@angular/core";
import { NodeEditor, GetSchemes, ClassicPreset } from "rete";
import { AreaPlugin, AreaExtensions } from "rete-area-plugin";
import {
  ConnectionPlugin,
  Presets as ConnectionPresets
} from "rete-connection-plugin";
import { AngularPlugin, Presets, AngularArea2D } from "rete-angular-plugin/15";

type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;
type AreaExtra = AngularArea2D<Schemes>;
class Node extends ClassicPreset.Node {
  width = 250;
  height = 160;

}
export async function createEditor(container: HTMLElement, injector: Injector, nodeData:any[]) {
  const socket = new ClassicPreset.Socket("socket");

  const editor = new NodeEditor<Schemes>();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const render = new AngularPlugin<Schemes, AreaExtra>({ injector });

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl()
  });

  render.addPreset(Presets.classic.setup());

  connection.addPreset(ConnectionPresets.classic.setup());

  editor.use(area);
  area.use(connection);
  area.use(render);

  AreaExtensions.simpleNodesOrder(area);
  await addNode(nodeData,socket,editor,area);
  // const a = new ClassicPreset.Node("A");
  // a.addControl(
  //   "a",
  //   new ClassicPreset.InputControl("text", { initial: "hello" })
  // );
  // a.addOutput("a", new ClassicPreset.Output(socket));
  // await editor.addNode(a);

  // const b = new ClassicPreset.Node("B");
  // b.addControl(
  //   "b",
  //   new ClassicPreset.InputControl("text", { initial: "hello" })
  // );
  // b.addInput("b", new ClassicPreset.Input(socket));
  // await editor.addNode(b);

  // await area.translate(b.id, { x: 320, y: 0 });

  // await editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));

  AreaExtensions.zoomAt(area, editor.getNodes());

  return () => area.destroy();
}
async function addNode(nodeData:any, socketInstance:ClassicPreset.Socket, editorInstance:NodeEditor<Schemes>, areaInstance:AreaPlugin<Schemes, AreaExtra>) {
    for(let i=0; i<nodeData.length; i++) {
    const  a =  new Node(nodeData[i].label);
    a.addControl(
    nodeData[i].label,
    new ClassicPreset.InputControl("text", { initial: "hello" })
  );
  if(nodeData[i].type!=='end'){
  a.addOutput("a", new ClassicPreset.Output(socketInstance));
  }
    if(nodeData[i].type!=='start'){
  a.addInput("a", new ClassicPreset.Input(socketInstance));
  }
  const col= i%4;
  const row=Math.floor(i/4)
  await editorInstance.addNode(a);
  await areaInstance.translate(a.id, { x: col*320, y: row*320 });
}
  }
