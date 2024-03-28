import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    "bookName": "The Great Gatsby",
    "totalPages": 180,
  },
  {
    "bookName": "To Kill a Mockingbird",
    "totalPages": 281,
  },
  {
    "bookName": "1984", "totalPages": 328,
  },
  {
    "bookName": "The Catcher in the Rye",  "totalPages": 224,
  },
  {
    "bookName": "Pride and Prejudice",  "totalPages": 279,
  },
  {
    "bookName": "Moby-Dick", "totalPages": 720,
  },
  {
    "bookName": "Crime and Punishment",  "totalPages": 671,
  },
  {
    "bookName": "The Hobbit", "totalPages": 310,
  },
  {
    "bookName": "Frankenstein",  "totalPages": 280,
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Reading = () => {
    const read =useLoaderData();
    return (
        <div>
           <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart> 
        </div>
    );
};

export default Reading;