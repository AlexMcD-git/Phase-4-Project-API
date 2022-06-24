class ChemicalExperiment < ApplicationRecord
  belongs_to :chemical
  belongs_to :experiment

  validates :experiment_id, presence: true
  validates :chemical_id, presence: true
end
