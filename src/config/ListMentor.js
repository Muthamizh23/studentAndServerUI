import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(
    `https://studentandmentorserver-1.onrender.com/mentor/${mentorID}`
  );
  return result.data;
};
export default ListMentor;
