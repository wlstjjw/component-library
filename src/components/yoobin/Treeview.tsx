// Treeview.tsx
import { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
} from "@minoru/react-dnd-treeview";
import type { NodeModel } from "@minoru/react-dnd-treeview";
import styled from "@emotion/styled";
// import { centerBoxStyles } from "@/styles/modules";

type TreeNode = NodeModel & {
  text: string;
};

const initialData: TreeNode[] = [
  { id: 1, parent: 0, text: "루트", droppable: true },
  { id: 2, parent: 1, text: "부모 1", droppable: true },
  { id: 3, parent: 2, text: "자식 1-1", droppable: false },
  { id: 4, parent: 2, text: "자식 1-2", droppable: false },
  { id: 5, parent: 1, text: "부모 2", droppable: false },
  { id: 6, parent: 1, text: "부모 3", droppable: true },
  { id: 7, parent: 6, text: "자식 3-1", droppable: false },
  { id: 8, parent: 6, text: "자식 3-2", droppable: false },
];

const TreeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;   
    align-items: flex-start;   

  .tree-root {
    position: relative;
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ul{
        padding-left: 38px;
    }

    //최상위 부모 포함한 li[role="listitem"]
    > li[role="listitem"] {
      position: relative;

       .tree-row-wrapper{
            width: 230px;
            min-width: 100%;
            padding: 5px 20px 5px 0px;
            position: relative;
            
            .tree-row{
                width: 100%;
                height: 44px;
                padding: 0px 4px 0px 12px;
                color: #667085;
                background-color: #F6F9FA;
                border: 1px solid #DCDCDC;
                border-radius: 4px; 
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
                display: flex;
                align-items: center;
                gap: 10px;
                position: relative; 
                overflow: hidden;
                cursor: pointer;
                -webkit-user-select: none;
                user-select: none;
                
                button{
                    width: 30px;
                    height: 30px;
                    border: 1px solid pink;
                }
            }
        }

    //최상위 부모 제외한 li[role="listitem"]
    li[role="listitem"] {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -16px;
          width: 1px;
          height: calc(100% + 4px);
          border-left: 1px dashed #A9AFBC;
        }

        &:last-child{
            &::before{
                content: "";
                position: absolute;
                top: -4px;
                left: -16px;
                width: 1px;
                height: 30px;
                border-left: 1px dashed #A9AFBC;
            }
        }

        .tree-row-wrapper{
            &::before{
                content: "";
                position: absolute;
                top: 50%;
                left: -16px;
                width: 16px;
                height: 1px;
                border-bottom: 1px dashed #A9AFBC;
            }
        }
      }
    }
  }
`;

export default function Treeview() {
  const [treeData, setTreeData] = useState<TreeNode[]>(initialData);

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <TreeWrapper>
             <Tree
                tree={treeData}
                rootId={0}
                onDrop={(newTree) => setTreeData(newTree as TreeNode[])}
                sort={false}
                insertDroppableFirst={false}
                initialOpen={true}
                render={(node, { isOpen, onToggle }) => (
                <div className="tree-row-wrapper">
                    <div className="tree-row">
                        {node.droppable ? (
                            <button
                            type="button"
                            className={`tree-toggle ${isOpen ? "open" : "closed"}`}
                            onClick={onToggle}
                        >
                            {isOpen ? "-" : "+"}
                        </button>
                        ) : (
                        <div className="tree-toggle-space"></div>
                        )}
                        <span className="tree-text">{node.text}</span>
                    </div>
                </div>
                )}
                dragPreviewRender={(monitorProps) => (
                <div className="tree-row tree-preview">
                    <p className="tree-text">{monitorProps.item.text}</p>
                </div>
                )}
                classes={{
                root: "tree-root",
                draggingSource: "dragging",
                dropTarget: "droptarget",
                }}
            />
        </TreeWrapper>
    </DndProvider>
  );
}
