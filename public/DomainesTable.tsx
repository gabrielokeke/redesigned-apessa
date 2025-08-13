import React from 'react';

const domaines = [
  { id: 1, name: 'Location de voitures' },
  { id: 2, name: 'Impression des documents' },
  { id: 3, name: 'Restauration, Hôtellerie et Cantines' },
  { id: 4, name: 'Fournitures de bureau, matériel & consommables informatiques, imprimerie, petits matériels et outillage' },
  { id: 5, name: 'Cabinet d’expertise comptable, cabinet juridique' },
];

const DomainesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">N°</th>
            <th className="px-4 py-2">Domaines</th>
          </tr>
        </thead>
        <tbody>
          {domaines.map((domaine) => (
            <tr key={domaine.id}>
              <td className="border px-4 py-2">{domaine.id}</td>
              <td className="border px-4 py-2">{domaine.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DomainesTable;