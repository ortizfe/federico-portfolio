import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import PropTypes from "prop-types";

const ListCard = ({ props }) => {
  return (
    <Card className="flex h-50 w-70 flex-wrap rounded-xl bg-amber-500 p-3 shadow-md shadow-amber-50 hover:shadow-lg">
      <CardHeader className="items-center justify-center text-xl leading-none font-bold tracking-tight text-gray-900">
        <p className="text-md">{props.name}</p>
      </CardHeader>
      <CardBody className="flex flex-wrap items-center justify-center gap-2 py-1">
        <p className="text-md text-gray-800">{props.description}</p>
        <Link
          isExternal
          href={props.link}
          className="pb-1 text-sm font-bold text-gray-200 hover:scale-95 hover:text-blue-200 hover:opacity-60"
        >
          Visit the {props.name} webpage
        </Link>
      </CardBody>
    </Card>
  );
};

export default ListCard;

ListCard.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
