import { Droppable, DragDropContext, Draggable } from "@hello-pangea/dnd";
import React, { useState } from "react";
import { Box , Typography ,LinearProgress, styled } from "@mui/material";
import { cardDataArr } from "../../fake_data/FakeData";
import CardReusable from "../CardReusable";
import list from '../../assets/vertical.svg'
import applied from '../../assets/Frame 1984078182.svg'
import screen from '../../assets/Frame 1984078183.svg'
import sent from '../../assets/Frame 1984078184.svg'
import interview from '../../assets/Frame 1984078184 (1).svg'
import accept from '../../assets/Frame 1984078182 (1).svg'
const Boxs = () => {
  
  const initialColumns = [...Array(5)].map((_, index) => ({
    id: `column-${index}`,
    items: cardDataArr.map((data, cardIndex) => ({
      id: `card-${index}-${cardIndex}`,
      content: data,
    })),
  }));


const PurpleLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`& .MuiLinearProgress-bar`]: {
    backgroundColor: '#6B3FA0', 
  },
  backgroundColor: '#e0e0e0',
}));

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColIndex = parseInt(source.droppableId.split("-")[1]);
    const destColIndex = parseInt(destination.droppableId.split("-")[1]);

    const sourceColumn = columns[sourceColIndex];
    const destColumn = columns[destColIndex];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    const newColumns = [...columns];
    newColumns[sourceColIndex] = {
      ...sourceColumn,
      items: sourceItems,
    };
    newColumns[destColIndex] = {
      ...destColumn,
      items: destItems,
    };

    setColumns(newColumns);
  };

  return (
   <DragDropContext onDragEnd={onDragEnd}>
  <Box display="flex" alignItems="center" gap={2}  sx={{
      pt: 0.5,    
      px: 1.5,    
      pb: 0,     
    }}>
    {columns.map((column, colIndex) => (
      <Droppable key={column.id} droppableId={`column-${colIndex}`}>
        {(provided) => (
          <Box
            className="column-container"
            sx={{
              width: "294px",
              height: "510px",
              borderRadius: "16px",
              backgroundColor: "#F9F9F9",
              p: 0, 
              display: "flex",
              flexDirection: "column",
              gap: 0, 
            }}
          >
           
           <Box
  sx={{
    p: 2,
    backgroundColor: "#F9F9F9",
    borderRadius: "16px 16px 0 0",
    borderBottom: "0",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}
>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <img 
      src={
        colIndex === 0 ? applied : 
        colIndex === 1 ? screen :
        colIndex === 2 ? sent :
        colIndex === 3 ? interview :
        accept
      } 
      alt="status icon" 
      style={{ width: "24px", height: "24px" }}
    />
    <Typography variant="p" sx={{ fontWeight: 400 , color:"#282828" }}>
      {
        colIndex === 0 ? "Applied" : 
        colIndex === 1 ? "Screened" :
        colIndex === 2 ? "Sent Test" :
        colIndex === 3 ? "Interviewing" :
        "Accepted"
      }
    </Typography>
  </Box>
  <Box>
    <img src={list} alt="menu" style={{ width: "20px", height: "20px" }} />
  </Box>
</Box>

           
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{
                flex: 1,
                overflowY: "auto",
                p: 2,
              }}
            >
              {column.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        opacity: snapshot.isDragging ? 0.8 : 1,
                        transform: snapshot.isDragging ? "scale(1.02)" : "scale(1)",
                        transition: "all 0.2s",
                        mb: 2, 
                      }}
                    >
                      <CardReusable data={item.content} />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>

         
            <Box
              sx={{
                p: 2,
                backgroundColor: "#F9F9F9",
                borderRadius: "0 0 16px 16px",
                border: "0",
                height:"90px"
              }}
            >
                 <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography fontWeight={500} color="text.secondary">
          Conversion Rate
        </Typography>
        <Typography fontWeight={700}>73%</Typography>
      </Box>

    
      <PurpleLinearProgress variant="determinate" value={73} />

      
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography fontSize={14} color="text.secondary">
          18 Active
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          6 Dropped
        </Typography>
      </Box>
            </Box>
          </Box>
        )}
      </Droppable>
    ))}
  </Box>
</DragDropContext>
  );
};

export default Boxs;
