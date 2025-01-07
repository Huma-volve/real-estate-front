import { Breadcrumb, Spinner, Alert } from "flowbite-react";
import PropertyCard from "../components/cards/PropertyCard";
import EmptyPlaceholder from "../components/EmptyPlaceholder";
import { useEffect, useState } from "react";
import { getProperties } from "../clientApi/Properties";

function ClientHome() {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const clientProperties = await getProperties();
        setProperties(clientProperties);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("حدث خطأ أثناء جلب البيانات. يرجى المحاولة مرة أخرى.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleDeleteProperty = (id) => {
    setProperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== id)
    );
  };
  const handleEditProperty = (updatedProperty) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
  };
  

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" aria-label="Loading properties..." />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Alert color="failure">
          <span>{error}</span>
        </Alert>
      </div>
    );

  if (!properties || properties.length === 0) return <EmptyPlaceholder />;

  return (
    <>
      <Breadcrumb className="text-primary font-bold text-lg">
        <Breadcrumb.Item>الرئيسة</Breadcrumb.Item>
        <Breadcrumb.Item>جميع العقارات</Breadcrumb.Item>
      </Breadcrumb>
      <div className="min-h-screen p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              onDelete={handleDeleteProperty} 
              onEdit={handleEditProperty}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ClientHome;
