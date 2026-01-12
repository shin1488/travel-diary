import "./App.css";
import TravelForm from "./components/TravelForm";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TravelList from "./components/TravelList";
import { DUMMY } from "./dummy";

function App() {
  const [travels, setTravels] = useState(() => {
    const saved = localStorage.getItem("travels");

    if (saved) {
      return JSON.parse(saved);
    }
    // localStorage에 없으면 dummy 사용
    return DUMMY;
  });

  const [editingTravel, setEditingTravel] = useState(null);

  // travels 변경될 때마다 localStorage 저장
  useEffect(() => {
    localStorage.setItem("travels", JSON.stringify(travels));
  }, [travels]);

  const handleAdd = (newTravel) => {
    setTravels([...travels, newTravel]);
  };

  const handleUpdate = (updatedTravel) => {
    setTravels(
      travels.map((t) => (t.id === updatedTravel.id ? updatedTravel : t))
    );
    setEditingTravel(null);
  };

  const handleDelte = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTravels(travels.filter((t) => t.id !== id));
    }
  };

  // 수정 시작
  const handleEdit = (travel) => {
    setEditingTravel(travel);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditingTravel(null);
  };

  // 통계 계산
  const totalTrips = travels.length;
  const totalCountries = new Set(travels.map((t) => t.country)).size;

  return (
    <div className="App">
      <Header totalTrips={totalTrips} totalCountries={totalCountries} />
      <TravelForm
        onAdd={handleAdd}
        editingTravel={editingTravel}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
      />

      <TravelList
        travels={travels}
        onEdit={handleEdit}
        onDelete={handleDelte}
      />
    </div>
  );
}

export default App;
