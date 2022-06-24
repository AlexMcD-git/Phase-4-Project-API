class ChemicalSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount_in_grams, :location
end
