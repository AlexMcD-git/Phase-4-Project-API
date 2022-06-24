class CreateExperiments < ActiveRecord::Migration[7.0]
  def change
    create_table :experiments do |t|
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
