class ExperimentSerializer < ActiveModel::Serializer
  attributes :id, :description, :is_complete
  has_many :chemicals
end
