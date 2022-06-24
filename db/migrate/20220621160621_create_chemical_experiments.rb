class CreateChemicalExperiments < ActiveRecord::Migration[7.0]
  def change
    create_table :chemical_experiments do |t|
      t.references :chemical, null: false, foreign_key: true
      t.references :experiment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
