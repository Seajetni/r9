import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({ content }) {
  return (
    <div className="flex  ">
      {content && content.map(({ img, title, details }) => (
        <Card className="mt-6 w-96 mx-4" key={img}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={img}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography>
              {details}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button> อ่านเพิ่มเติม</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
